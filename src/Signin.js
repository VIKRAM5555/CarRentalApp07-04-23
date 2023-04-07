import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Paper, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { Field, Formik, useFormik } from "formik";
import Alert from "@mui/material/Alert";
import * as yup from "yup";
import { useState, useContext, createContext } from "react";
import { UserContext } from "./App";
import { Login } from "@mui/icons-material";
import Constants from "./AppConstant";
export function Signin() {
  const [isVisible, setIsVisible] = useState(false);

  let url = Constants.url;
  const { UsernameData, setUsernameData, setUserDataFromDB } =
    useContext(UserContext);
  const navigate = useNavigate();
  let validationSchema = yup.object().shape({
    UserName: yup.string().required(),
    Password: yup.string().required(),
  });

  const { handleSubmit, handleChange, errors, handleBlur, touched } = useFormik(
    {
      initialValues: {
        UserName: "",
        Password: "",
      },
      validationSchema,
      onSubmit: (value) => {
       
        let req = {
          method: "POST", // *GET, POST, PUT, DELETE, etc.

          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },

          body: JSON.stringify({
            name: value.UserName,
            password: value.Password,
          }),
        };

        fetch(`${url}signin`, req)
          .then((response) => response.json())
          .then((data) => {
            data.msg === "Successful Login"
              ? navigate("/scrollanimation")
              : alert(data.msg);
            setUserDataFromDB(data.userdata);
          });
         .catch((error) => {
            alert("Successful Login");
            console.error(error);
          });
        console.log(UsernameData);
      },
    }
  );

  return (
    <div className="App">
      <form
        onSubmit={handleSubmit}
        className="App-header"
        style={{ display: "flex", gap: "50px", background: "#6600ff" }}
      >
        <Typography
          variant="h5"
          style={{
            color: "black",
            letterSpacing: "10px",
            className: "App-header",
          }}
        >
          Sign In
        </Typography>

        <TextField
          id="input-with-icon-textfield"
          label="USERNAME"
          name="UserName"
          InputProps={{
            endAdornment: (
              <IconButton position="start" sx={{ width: "2vw" }}>
                <AccountCircle />
              </IconButton>
            ),
          }}
          variant="outlined"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.UserName && touched.UserName ? (
          <Alert severity="error">{errors.UserName}</Alert>
        ) : (
          ""
        )}

        <TextField
          id="input-with-icon-textfield"
          name="Password"
          label="PASSWORD"
          InputProps={{
            endAdornment: (
              <IconButton
                sx={{ width: "2vw" }}
                className="Stack"
                color="primary"
                onClick={() => setIsVisible(!isVisible)}
                position="end"
              >
                {!isVisible ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            ),
          }}
          variant="outlined"
          type={isVisible ? "password" : "text"}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.Password && touched.Password ? (
          <Alert severity="error">{errors.Password}</Alert>
        ) : (
          ""
        )}

        <Button
          type="submit"
          variant="contained"
          sx={{ width: "10vw", background: "#6600ff" }}
          className="Stack"
        >
          <div>Signin</div>
        </Button>
        <Typography
          variant="h6"
          onClick={() => navigate("/signup")}
          style={{
            color: "black",
            letterSpacing: "10px",
            className: "App-header",
          }}
        >
          We are excited to have you join our community of users.
        </Typography>
      </form>
    </div>
  );
}
