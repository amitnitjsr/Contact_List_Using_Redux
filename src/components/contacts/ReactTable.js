import React from 'react'
import ReactTable from 'react-table';
import IconButton from '@material-ui/core/IconButton';
import ContactList from './contactList';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import { Row, Col } from 'reactstrap';
import AddEditContact from './AddEditContacts';
import './common.css';

// const isItemSelected = isSelected(row.name);
// const labelId = `enhanced-table-checkbox-${index}`;
class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: {},
            tableData: ContactList,
            selectedRow: null,

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

    render() {

        return (
            <div className="row">
                <div className="column" >
                    <div style={{ width: '850px', paddingLeft: '102px' }}>
                        <div >
                            {/* {Object.keys(this.state.selected).length > 0 ?
                    <IconButton onClick={() => this.deleteHandler()}>
                        <i className="zmdi zmdi-delete zmdi-hc-fw table-icon" />
                    </IconButton>
                    : null} */}
                            {/* {this.state.selectedRow? } */}
                            <ReactTable
                                data={this.state.tableData ? this.state.tableData : []}
                                columns={[
                                    {
                                        Header: () => <div className="ID">+</div>,
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
                                                    rowInfo.index === this.state.rowEdit ? "#00afec" : "white",
                                                color:
                                                    rowInfo.index === this.state.rowEdit ? "white" : "black"
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
                        <AddEditContact data={this.state.selectedRow} /> :
                        null
                    }

                </div>
            </div>


        );
    }
}

export default Table;