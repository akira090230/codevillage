import {TextField,Button,Card} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/Styles";

const Room = () =>{
    return(
        <>
        <h1>チャットルーム</h1>
        <form>
        <TextField variant='outlined 'placeholder='チャットを入力...' />
        <button variant='contained' color='secondary'>
            送信
            </button>
        </form>
        
        </>
    );
};

export default Room;