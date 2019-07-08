import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
    background: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: 'lightgrey',
        padding: '30px',
        borderRadius: '8px',
    },
    input: {
        margin: '10px',
    }
}))