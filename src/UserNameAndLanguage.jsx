

function UserNameAndLanguage() {

    // this.setstate = {value: ''}

    // // this.handleChange = this.handleChange.bind(this);

    // function handleChange(event) {
    //     this.setState({value: event.target.value});
    //   }

    return (
        <div className='UserNameAndLanguage'>
            <div className='UserName'>
                {/* <p>Username</p> */}
                <input
                    type={"text"}
                    placeholder="Enter user name"
                    // // name={"UserName"}
                    // onChange={this.handleChange}
                    // value={this.state.value}
                />
                
            </div>
            <div className='LanguageSelect'>
                {/* <p>English</p> */}
                <select>
                    <option value={"English"}>English</option>
                    <option value={"Hindi"}>Hindi</option>
                    <option value={"German"}>German</option>
                    <option value={"French"}>French</option>
                </select>
            </div>
        </div>
    );
}
export default UserNameAndLanguage;