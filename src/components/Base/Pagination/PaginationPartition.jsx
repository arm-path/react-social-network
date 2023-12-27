import {useState} from 'react'

import classes from './Pagination.module.css'


const PaginationPartition = ({page, totalPages, changePage, partitionSize = 10, ...props}) => {
    let pages = []
    for (let i = 1; i < totalPages; i++) pages.push(i)

    let totalPartitionSize = totalPages / partitionSize
    let [partitionNumber, setPartitionNumber] = useState(1)
    let leftPartition = (partitionNumber - 1) * partitionSize
    let rightPartition = leftPartition + partitionSize + 1
    let partitionPages = pages.filter(el => el > leftPartition && el < rightPartition)
    let activeNumber = `${classes.numberPage} ${classes.active}`

    return (
        <div className={classes.pagination}>
            {partitionNumber > 1 &&
                <span onClick={(e) => setPartitionNumber(partitionNumber - 1)}
                      className={classes.numberPage}> &laquo;
            </span>
            }
            {partitionPages.map(el =>
                <span key={el} onClick={(e) => changePage(el)}
                      className={page === el ? activeNumber : classes.numberPage}>
                                  {el}
                            </span>
            )}
            {totalPartitionSize - 1 > partitionNumber &&
                <span onClick={(e) => setPartitionNumber(partitionNumber + 1)}
                      className={classes.numberPage}> &raquo;
            </span>
            }
        </div>
    )
}

export default PaginationPartition