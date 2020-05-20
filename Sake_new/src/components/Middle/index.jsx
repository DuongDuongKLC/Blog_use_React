import {Item_menu, Title_main} from './items/index.js';
import Upload_status from './items/upload_status.js';
import {End} from '../End/index.js'

export const Middle_main = (props) => {
    return(
        <div class="middle_main h(30ph) container-fluid">
            <Item_menu />
            <Title_main />
            <Upload_status />
            <End />
        </div>
    )
}
