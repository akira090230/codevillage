import { Button,TextField} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/Styles';


const useStyles =makeStyles({
    root:{
        width:'400px',
        height:'325px',
        margin:'50px auto',
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between" 

    }
})
const Login = () =>{
    const  classes=useStyles();
    
    return(
        <form className={classes.root}>
            <h1>ログインページ</h1>
    <TextField fullWidth label='メールアドレス' />
    <TextField fullWidth label='パスワード' />
    <Button color='primary' variant='contained'>ログイン</Button>
    <p>アカウントをお持ちでない方</p>
    </form>);
};
export default Login;