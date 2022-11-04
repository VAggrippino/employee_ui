import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

export default function Sort(props) {
  const sortIcon = () => {
    const thisColumn = props.column;
    const sortColumn = props.sort.column;
    const order = props.sort.order;

    const sortedColumn = thisColumn === sortColumn;
    const validSort = [`ascending`, `descending`].indexOf(order) !== -1;

    if (!sortedColumn || !validSort) {
      return <FontAwesomeIcon className="sort__none" icon={solid('sort')} />
    } else if (order === `ascending`) {
      return <FontAwesomeIcon className="sort__ascending" icon={solid('sort-up')} />
    } else if (order === `descending`) {
      return <FontAwesomeIcon className="sort__descending" icon={solid('sort-down')} />
    }
  }

  return(
    <div className="sort">
      <FontAwesomeIcon className="sort__none" icon={solid('sort')} />
      {sortIcon()}
    </div>
  )
}