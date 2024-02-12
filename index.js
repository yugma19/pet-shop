const bodyParser = require('body-parser');
const compression = require('compression');
const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const httpStatus = require('http-status');

const { GENERAL_ERROR } = require('./constants/error-constants');
const mainRoute = require('./router/index');
const ApiError = require('./utils/ApiError');
const { errorConverter, errorHandler } = require('./utils/error-handler');

const app = express();
const PORT = 3300;

// httpProxy.createProxyServer({target: 'http://localhost:5000'}).listen(PORT);

// const server = http.createServer(app);
app.use(helmet());

app.use(compression());

app.use(cors());

app.use(express.json());



// to handle URL-encoded form data sent in POST requests
app.use(express.urlencoded({ extended: false }));

app.use('/V3/mainRoute', mainRoute);

// send back a 404 error for any unknown api request
app.use((_, __, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, GENERAL_ERROR.NOT_FOUND));
});

// convert error to ApiError, if needed
app.use(errorConverter);

// handle error6
app.use(errorHandler);

app.use(bodyParser.json());

app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Server is running on PORT ${PORT}`);
  });

