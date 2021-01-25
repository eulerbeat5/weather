import "./intro-page.scoped.css";

import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";

import AppContext from "../../store";
import { updateUsername, updateLocation } from "../../store/actions";

import { Grid, TextField } from "@material-ui/core";

const IntroPage = () => {
    const { state, dispatch } = useContext(AppContext);
    const history = useHistory();

    const [username, setUsername] = useState(state.username);
    const [location, setLocation] = useState(state.location);

    const handleContinue = (evt) => {
        updateUsername(dispatch, username);
        updateLocation(dispatch, location);
        history.push("/content");
    };

    const handleUsernameChange = (evt) => {
        setUsername(evt.target.value);
    };

    const handleLocationChange = (evt) => {
        setLocation(evt.target.value);
    };

    return (
        <Grid container justify="center" alignItems="center">
            <div className="intro-panel">
                <p className="title">Welcome</p>
                <p className="message">Tell us about yourself</p>
                <div className="controls">
                    <div className="control">
                        <TextField
                            id="username"
                            label="Your name"
                            variant="filled"
                            value={username}
                            onChange={handleUsernameChange}
                            className="form-control"
                        />
                    </div>
                    <div className="control">
                        <TextField
                            id="location"
                            label="Location"
                            variant="filled"
                            value={location}
                            onChange={handleLocationChange}
                            className="form-control"
                        />
                    </div>
                    <div className="control">
                        <button
                            className="button form-control"
                            onClick={handleContinue}
                        >
                            Continue
                        </button>
                    </div>
                </div>
            </div>
        </Grid>
    );
};

export default IntroPage;
