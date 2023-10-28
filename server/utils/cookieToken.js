const cookieToken = (user, res, message, statusCode = 200) => {
    const token = user.getJwtToken();
    const options = {
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        httpOnly: true
    }
    user.password = undefined;
    res.status(statusCode).cookie("token", token, options).json({
        success: true,
        message,
        token,
        user
    })
}

export default cookieToken;