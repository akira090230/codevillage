import { Button,TextField} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/Styles';

const useStyles =makeStyles({
    root:{
        width:'400px',
        height:'350px',
        margin:'50px auto',
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between" 

    }
})
const Signup = () =>{
    const  classes=useStyles();
    
    return(
        <form className={classes.root}>
            <h1>ユーザー登録ページ</h1>
    <TextField fullWidth label='ユーザーネーム' />
    <TextField fullWidth label='メールアドレス' />
    <TextField fullWidth label='パスワード' />
    <Button color='primary' variant='contained'>登録</Button>
    <p>アカウントを既にお持ちの方</p>
    </form>);
};

export default Signup;