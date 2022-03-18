import React from 'react';

class StatusChange extends React.Component<{}, {}> {
    state = {
        text: 'He is just fine',
        editMode: false
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode
                    ? <div>
                        <span onDoubleClick={this.activateEditMode}>{this.state.text}</span>
                    </div>
                    : <div>
                        <input autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.text}/>
                    </div>
                }
            </div>
        )
    }
}

export default StatusChange