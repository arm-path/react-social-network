import classes from './Pagination.module.css'

const Pagination = ({page, totalPages, changePage}) => {
    let pages = []
    for (let i = page - 1; i >= page - 3 && i >= 1; i--) pages.push(i)
    pages.reverse()
    pages.push(page)
    for (let i = page + 1; i <= page + 3 && i <= totalPages; i++) pages.push(i)

    let activeNumber = `${classes.numberPage} ${classes.active}`

    return (
        <div className={classes.pagination}>
            {page > 3 && <span onClick={(e) => changePage(page - 3)} className={classes.numberPage}>
                &laquo;
            </span>}

            {pages.map(el =>
                <span key={el} onClick={(e) => changePage(el)}
                      className={page === el ? activeNumber : classes.numberPage}>
                                  {el}
                            </span>
            )}
            {totalPages - 3 > page &&
                <span onClick={(e) => changePage(page + 3)} className={classes.numberPage}>
                    &raquo;
                </span>
            }
        </div>
    )
}

export default Pagination