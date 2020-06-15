import { makeStyles } from '@material-ui/core/styles'
import ChipItems from './ChipItems'
const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        margin: theme.spacing(0.1),
        overflowX: "auto"
    },
    table: {
        minWidth: 200
    },
    container: {
        maxHeight: 440,
    },
}))
export default function FilterCatalog(props) {
    const { selectedItem, handleSelectedItemChange } = props;
    const [catalogs, setCatalogs] = useState([]);
    const getCatalogs = async () => {
        const { data } = await axios.get('http://localhost:3333/catalog');
        setCatalogs(data);
    };
    useEffect(() => {
        getCatalogs();
    }, [])
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Paper className={classes.root} >
                <TableContainer >
                    <Table className={classes.table} size="small">
                        <TableBody>
                            <TableRow>
                                <TableHead component="th" scope="row">
                                    {
                                        selectedItem.map(item =>
                                            <ChipItems
                                                name={item}
                                                key={item}
                                                selectedItem={selectedItem}
                                                isSelected={true}
                                                handleSelectedItemChange={handleSelectedItemChange}
                                            />
                                        )
                                    }
                                    {
                                        catalogs
                                            .filter(item => selectedItem.indexOf(item.name) === -1)
                                            .map(item =>
                                                <ChipItems
                                                    name={item.name}
                                                    key={item.name}
                                                    selectedItem={selectedItem}
                                                    isSelected={false}
                                                    handleSelectedItemChange={handleSelectedItemChange}
                                                />)
                                    }
                                </TableHead>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer >
            </Paper>
        </div>
    )
}