// ------------------------------------------------------------

export default function Note() {
  // const [query, setQuery] = useState<string | undefined>(undefined);
  // const [debouncedQuery] = useDebounce(query, 1000);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [modalOpen, setModalOpen] = useState(false);

  // const handleFilter = (searchString: string) => {
  //   setQuery(searchString);
  //   setCurrentPage(1);
  // };

  // const {
  //   data: response,
  //   isLoading,
  //   isError,
  // } = useQuery({
  //   queryKey: ["notes", debouncedQuery, currentPage],
  //   queryFn: () => fetchNotes(debouncedQuery, currentPage),
  //   placeholderData: keepPreviousData,
  // });
  // console.log("filter:", query);
  // console.log("fetchResponseData:", response?.notes);

  // ------------------------------------------------------------

  return (
    // <div className={css.app}>
    //   <header className={css.toolbar}>
    //     {/* Компонент SearchBox */}
    //     <SearchBox
    //       handleSearch={(searchString: string) => handleFilter(searchString)}
    //     />
    //     {/* Пагінація */}
    //     {response && response.totalPages > 1 && (
    //       <Pagination
    //         pageCount={response.totalPages}
    //         currentPage={currentPage}
    //         onPageChange={setCurrentPage}
    //       />
    //     )}
    //     {/* Кнопка створення нотатки */}
    //     <button className={css.button} onClick={() => setModalOpen(true)}>
    //       Create note +
    //     </button>
    //   </header>

    //   {isLoading ? (
    //     <Loader />
    //   ) : isError ? (
    //     <ErrorMessage />
    //   ) : (
    //     response &&
    //     response?.notes.length > 0 && <NoteList notes={response.notes ?? []} />
    //   )}
    //   {modalOpen && (
    //     <Modal onModalClose={() => setModalOpen(false)}>
    //       <NoteForm closeClick={() => setModalOpen(false)} />
    //     </Modal>
    //   )}
    // </div>
    null
  );
}
