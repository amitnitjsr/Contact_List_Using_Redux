import React from 'react'
import ReactTable from 'react-table';
import IconButton from '@material-ui/core/IconButton';
import ContactList from './contactList';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import { Row, Col } from 'reactstrap';
import './common.css';

// const isItemSelected = isSelected(row.name);
// const labelId = `enhanced-table-checkbox-${index}`;
class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: {},
            tableData: ContactList,
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
            <div >
                {Object.keys(this.state.selected).length > 0 ?
                    <IconButton onClick={() => this.deleteHandler()}>
                        <i className="zmdi zmdi-delete zmdi-hc-fw table-icon" />
                    </IconButton>
                    : null}
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
                            Header: () => <div className="Header" >Basic info</div>,
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

                />
            </div>
        );
    }
}

export default Table;