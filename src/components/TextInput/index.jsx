import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';

const TextInput = ({ inputs, events, styleText, label, line, rows }) => {
    return (
        <Grid xs={12} sm={12} md={12} lg={12}>
            <TextField id={styleText} label={label} rows={rows} variant="filled" multiline={line} value={inputs} onChange={events} />
        </Grid>
    );
}

export default TextInput;