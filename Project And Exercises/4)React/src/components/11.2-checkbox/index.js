import React from "react";

class CheckBoxs extends React.Component {


    render() {
        return (
            <div>
                <input type='checkbox' />I read the term of the app <br />
                <input type='checkbox' />I accept the term of the app <br />
                <input type='checkbox' checked='true' />I want to get the weekly news letter <br />
                <input type='checkbox' checked='true' />I want to get sales and offers
            </div>
        )
    }


}
export default CheckBoxs