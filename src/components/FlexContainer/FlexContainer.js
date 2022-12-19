import './FlexContainer.css';

import { UsersList } from '../UsersList/UsersList';
import { Question } from '../Question/Question';

export function FlexContainer() {
	return <div className="FlexContainer"><UsersList /><Question /></div>
}