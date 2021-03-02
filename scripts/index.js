import { mainData } from '../data/data';
import { mainData as Result}  from '../data/result';
import { getChangedArray }  from '../scripts/change_array';
import { Put }  from '../scripts/put_to_dom';



let ChangedArray = getChangedArray(mainData);

console.log(ChangedArray);
Put(ChangedArray);

