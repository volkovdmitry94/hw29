const container = document.getElementById('container');
const root = ReactDOM.createRoot(container);

class Form extends React.Component {

    handleSubmit(event) {
        document.querySelector('#list').innerHTML = `
            <h3>User:</h3>
            <li>Id: ${event.target.id.value}</li> 
            <li>Name: ${event.target.name.value}</li> 
            <li>Nickname: ${event.target.username.value}</li> 
            <li>Email: ${event.target.email.value}</li> 
            <li>Phone: ${event.target.phone.value}</li>`;
        event.preventDefault();
    }

    render() {
        return (
            <form className={'card form'} onSubmit={this.handleSubmit}>
                <h3 className={'card-header'}>User Form</h3>
                <label>
                    Enter User ID:
                    <input type={'number'} className={'form-control'} name={'id'}/>
                </label>
                <label>
                    Enter User Name:
                    <input type={'text'} className={'form-control'} name={'name'}/>
                </label>
                <label>
                    Enter User Nickname:
                    <input type={'text'} className={'form-control'} name={'username'}/>
                </label>
                <label>
                    Enter User Email:
                    <input type={'email'} className={'form-control'} name={'email'}/>
                </label>
                <label>
                    Enter User Phone:
                    <input type={'text'} className={'form-control'} name={'phone'}/>
                </label>
                <br/>
                <input type="submit" className={'btn btn-success'} value="Send User"/>
            </form>
        );
    }
}

class ShowAll extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Form/>
                <div className={"card"} id={"list"}>
                </div>
            </React.Fragment>
        )
    }
}

root.render(<ShowAll/>);