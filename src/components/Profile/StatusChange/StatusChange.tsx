import React, {ChangeEvent} from 'react';

type StatusChangeType = {
    status: string
    updateStatus: (status: string) => void
}

class StatusChange extends React.Component<StatusChangeType, {}> {
    state = {
        status: this.props.status,
        editMode: false
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({editMode: false})
        this.props.updateStatus(this.state.status)
    }
    textChanger = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({status: e.currentTarget.value})
    }

    render() {
        return (
            <div>
                {!this.state.editMode
                    ? <div>
                        <span onDoubleClick={this.activateEditMode}>{this.state.status}</span>
                    </div>
                    : <div>
                        <input autoFocus={true} onChange={this.textChanger} onBlur={this.deactivateEditMode} value={this.state.status}/>
                    </div>
                }
            </div>
        )
    }
}

export default StatusChange