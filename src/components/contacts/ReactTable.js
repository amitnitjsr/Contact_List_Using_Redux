import React from 'react'
import ReactTable from 'react-table';
import IconButton from '@material-ui/core/IconButton';
import ContactList from '../data/contactList';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import MuiDialogActions from '@material-ui/core/DialogActions';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { withStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { Row, Col, Button, Input } from 'reactstrap';
import ShowDetail from './ShowDetail';
import { connect } from "react-redux";
import './ReactTable.css';

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2)
        // borderRadius: '2% 94% 3% 94% / 88% 6% 88% 6%'
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        // color: theme.palette.grey[500]
    },
});

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1)
    }
}))(MuiDialogActions);

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle
            disableTypography
            className={classes.root}
            {...other}
            style={{
                // boxShadow: '0 2px 5px 0 rgba(0, 0, 0, 0.26)',
                background: '#1f2859'
            }}
        >
            <Typography style={{ color: 'white' }} variant="h6">
                {children}
            </Typography>
            {onClose ? (
                <IconButton
                    style={{ color: 'grey' }}
                    aria-label="close"
                    className={classes.closeButton}
                    onClick={onClose}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: {},
            tableData: ContactList,
            selectedRow: null,

            //add contact
            showPopup: false,
            name: '',
            email: '',
            phone: '',
            address: '',
            designation: '',
            editAdd: false,
        }
    }

    toggleRow = (row) => {
        const newSelected = Object.assign({}, this.state.selected);
        newSelected[row.id] = !this.state.selected[row.id];
        this.setState({ selected: newSelected }, () => {
            if (this.state.selected[row.id] === false) {
                delete this.state.selected[row.id];
                console.log(this.state.selected, Object.keys(this.state.selected).length)
            }
        })
    }
    deleteHandler = () => {
        var result = Object.entries(this.state.selected);
        result.map((val, ind) => {
            console.log(val[0])
            delete this.state.tableData.pop(val[0]);

        })
    }
    saveHadler = () => {

    }
    addHandler = () => {

        this.setState({
            name: '', email: '',
            address: '', company: '',
            phone: '', designation: '', editAdd: true
        });
        this.popupToggle();
    }

    editHandler = () => {

        if (this.state.selectedRow) {
            this.setState({
                name: this.state.selectedRow.name, email: this.state.selectedRow.email,
                address: this.state.selectedRow.address, company: this.state.selectedRow.company,
                phone: this.state.selectedRow.phone, designation: this.state.selectedRow.designation,
                editAdd: false
            });
            this.popupToggle();
        }
    }
    popupToggle = () => {
        this.setState((preState) => {
            return { showPopup: !preState.showPopup }
        })
    }
    handleSubmit = () => {
        this.popupToggle();
        // if (!this.phoneNumberValidater(this.state.phone)) {
        //     alert("Invalid Phone Number");
        //     return;
        // }
        this.props.pushList(this.state.name, this.state.phone, this.state.email, this.state.designation,
            this.state.address);
        // this.props.history.goBack();
    }
    inputChangeHandler = (name, e) => {
        this.setState({ [name]: e.target.value })
    }
    render() {
        let add_Edit_contact = (
            <Dialog open={this.state.showPopup} onClose={this.popupToggle}>
                <DialogTitle onClose={this.popupToggle} >
                    {this.state.editAdd ? 'Add: Contact' : 'Edit: Contact'}
                </DialogTitle>
                <DialogContent>
                    <Row style={{ padding: '5px' }}>
                        <Col md='4' sm='4'  >
                            <span
                            >Full Name:</span>
                        </Col>
                        <Col md='8' sm='8'>
                            <Input type='text' value={this.state.name}
                                onChange={(event) => this.inputChangeHandler('name', event)} />
                        </Col>
                    </Row>
                    <Row style={{ padding: '5px' }}>
                        <Col md='4' sm='4'  >
                            <span
                            >Email:</span>
                        </Col>
                        <Col md='8' sm='8'>
                            <Input type='text' value={this.state.email}
                                onChange={(event) => this.inputChangeHandler('email', event)} />
                        </Col>
                    </Row>
                    <Row style={{ padding: '5px' }}>
                        <Col md='4' sm='4'>
                            <span >Phone:</span>
                        </Col>
                        <Col md='8' sm='8'>
                            <Input type='text' value={this.state.phone}
                                onChange={(event) => this.inputChangeHandler('phone', event)} />
                        </Col>
                    </Row>
                    <Row style={{ padding: '5px' }}>
                        <Col md='4' sm='4'>
                            <span >Company:</span>
                        </Col>
                        <Col md='8' sm='8'>
                            <Input type='text' value={this.state.company}
                                onChange={(event) => this.inputChangeHandler('company', event)} />
                        </Col>
                    </Row>
                    <Row style={{ padding: '5px' }}>
                        <Col md='4' sm='4'>
                            <span >Designation:</span>
                        </Col>
                        <Col md='8' sm='8'>
                            <Input type='text' value={this.state.designation}
                                onChange={(event) => this.inputChangeHandler('designation', event)} />
                        </Col>
                    </Row>
                    <Row style={{ padding: '5px' }}>
                        <Col md='4' sm='4'>
                            <span >Address:</span>
                        </Col>
                        <Col md='8' sm='8'>
                            <Input type='text' value={this.state.address}
                                onChange={(event) => this.inputChangeHandler('address', event)} />
                        </Col>
                    </Row>
                </DialogContent>
                <DialogActions>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={this.handleSubmit
                        }
                        disabled={this.state.validate || this.state.filesystemValidate || this.state.deviceValidate}
                        style={{
                            left: '-17px',
                            position: 'relative',
                        }}
                    >
                        Add
                      </Button>
                </DialogActions>
            </Dialog >
        );
        return (
            <div className="row">
                {add_Edit_contact}

                <div className="column" >
                    <div style={{ width: '850px', paddingLeft: '102px' }}>
                        <div >
                            <Button onClick={() => this.addHandler()}>+ Add Contact</Button>
                            <Button onClick={() => this.editHandler()}>Edit</Button>
                            <Button onClick={() => this.props.deleteListById(this.state.selected)}>Delete</Button>
                            <ReactTable
                                data={this.props.list ? this.props.list : []}
                                columns={[
                                    {
                                        Header: () => <div className="ID"><i class="zmdi zmdi-plus" /></div>,
                                        id: 'row',
                                        className: 'ID TextCenter',
                                        headerClassName: 'ID TextCenter',
                                        Cell: (row) => {
                                            return (
                                                <Checkbox
                                                    // color="primary"
                                                    checked={this.state.selected[row.row._original.id] === true}
                                                    onChange={() => {
                                                        this.toggleRow(row.row._original);
                                                    }}
                                                />
                                            )
                                        },
                                        style: {
                                            textAlign: 'center'
                                        },
                                        sortable: false,
                                        filterable: false,
                                        foldable: true,
                                        width: 75
                                    },
                                    {
                                        Header: () => <div className="Header" style={{ textAlign: 'initial' }} >Basic info</div>,
                                        // accessor: 'name',
                                        className: 'Name TextCenter',
                                        headerClassName: 'Name TextCenter',
                                        Cell: (row) => {
                                            return (
                                                <div style={{ padding: '13px' }}>
                                                    <Row>
                                                        <Avatar className="bg-secondary size-80">
                                                            <span style={{ fontSize: '14px' }}>
                                                                {row.row._original.name.match(/\b(\w)/g).join('')}
                                                            </span></Avatar>
                                                        <Row>
                                                            <Col>
                                                                <span style={{ fontWeight: 600 }}>{row.row._original.name}</span><br />
                                                                <span style={{ fontSize: '13px' }}>{row.row._original.email}</span>
                                                            </Col>
                                                        </Row>
                                                    </Row>
                                                </div>
                                            )
                                        },
                                        foldable: true
                                    },
                                    {
                                        Header: () => <div className="Header">Company</div>,
                                        accessor: 'company',
                                        foldable: true,
                                        className: 'Description TextCenter',
                                        headerClassName: 'Description TextCenter'
                                    },
                                    // {
                                    //     Header: 'Action',
                                    //     sortable: false,
                                    //     filterable: false,
                                    //     className: 'Action TextCenter',
                                    //     headerClassName: 'Action TextCenter',
                                    //     id: 'button',
                                    //     style: { textAlign: 'center' },
                                    //     width: 200,
                                    //     Cell: (row) => {
                                    //         return (
                                    //             <span>
                                    //                 <IconButton
                                    //                     className=""
                                    //                     onClick={() =>
                                    //                         this.props.history.push(
                                    //                             '/credentials/edit/' + row.row._original.id + '/'
                                    //                         )}
                                    //                 >
                                    //                     <i className="zmdi zmdi-edit zmdi-hc-fw table-icon" />
                                    //                 </IconButton>
                                    //             </span>
                                    //         );
                                    //     }
                                    // }
                                ]}
                                pageSize={this.state.tableData.length}
                                showPaginationBottom={false}
                                getTrProps={(state, rowInfo) => {
                                    if (rowInfo && rowInfo.row) {
                                        return {
                                            onClick: e => {
                                                this.setState({ selectedRow: rowInfo.row._original }, () => {
                                                    if (this.state.selectedRow !== null)
                                                        this.setState({ buttonEnable: false })
                                                    else
                                                        this.setState({ buttonEnable: true })
                                                });
                                                if (rowInfo.index !== this.state.rowEdit) {
                                                    this.setState({
                                                        rowEdit: rowInfo.index,
                                                        selectedRowIndex: rowInfo.original,
                                                        selectionChanged: this.state.selectionChanged
                                                            ? false
                                                            : true
                                                    });
                                                } else {
                                                    this.setState({
                                                        rowEdit: null
                                                    });
                                                }
                                            },
                                            style: {
                                                background:
                                                    rowInfo.index === this.state.rowEdit ? "#e9ecef" : "white",
                                                color:
                                                    rowInfo.index === this.state.rowEdit ? "black" : "black"
                                            }
                                        };
                                    } else {
                                        return {};
                                    }
                                }}

                            />
                        </div>
                    </div>
                </div>
                <div className="column" >
                    {this.state.selectedRow ?
                        <ShowDetail data={this.state.selectedRow} /> :
                        null
                    }

                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        list: state.list,
    }
}

const mapDispachToProps = (dispatch) => {
    return {
        deleteListById: (id) => { dispatch({ type: "deleteListById", payload: { "id": id } }) },
        pushList: (name, phone, email, designation, address, company) => {
            dispatch({
                type: 'pushList',
                payload: {
                    "name": name, "phone": phone, "email": email,
                    "designation": designation, "address": address,
                    "company": company
                }
            })
        }
    }
}

export default connect(mapStateToProps, mapDispachToProps)(Table);