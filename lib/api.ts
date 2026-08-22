import axios from "axios";

import type { Note } from "../types/note";

interface FetchResponse {
  notes: Note[];
  totalPages: number;
}
interface formValuesProps {
  content: string;
  tag: string;
  title: string;
}

const apiBaseUrl = process.env.NEXT_PUBLIC_NOTEHUB_BASE_URL;
const apiToken = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

// ------------------------------------------------------------

export async function fetchNotes(
  search?: string,
  currentPage?: number,
): Promise<FetchResponse> {
  // console.log("fetchNotes called", currentPage);
  // console.log("filter:", query);
  const response = await axios.get<FetchResponse>(
    `${apiBaseUrl}/notes`,

    {
      headers: {
        Authorization: `Bearer ${apiToken}`,
      },
      params: {
        search: search,
        page: currentPage,
      },
    },
  );

  return response.data;
}

// ------------------------------------------------------------

export async function fetchNoteById(id: string): Promise<Note> {
  console.log("deleteNote called", id);
  const response = await axios.get<Note>(`${apiBaseUrl}/notes/${id}`, {
    headers: {
      Authorization: `Bearer ${apiToken}`,
    },
  });

  return response.data;
}

// ------------------------------------------------------------

export async function createNote(formValues: formValuesProps): Promise<Note> {
  // console.log("createNote formValues", formValues);
  const response = await axios.post<Note>(`${apiBaseUrl}/notes`, formValues, {
    headers: {
      Authorization: `Bearer ${apiToken}`,
    },
  });

  // console.log("response values", response.data);
  return response.data;
}

// ------------------------------------------------------------

export async function deleteNote(deleteID: string): Promise<Note> {
  console.log("deleteNote called", deleteID);
  const response = await axios.delete<Note>(`${apiBaseUrl}/notes/${deleteID}`, {
    headers: {
      Authorization: `Bearer ${apiToken}`,
    },
  });

  return response.data;
}
