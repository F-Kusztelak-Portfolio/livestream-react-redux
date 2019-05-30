## Livestream App

This application allows user to create, delete, edit and do live streaming by using OBS or similar software.

User must be logged in to administer streams.

Only streams created by this logged user can be edited or deleted.

### Getting Started

#### Run client

```
cd client
```

```
npm install
```

```
npm start
```

#### Run api

```
cd api
```

```
npm install
```

```
npm start
```
#### Run rtmpserver

```
cd rtmpserver
```

```
npm install
```

```
npm start
```
### OBS configuration

* [OBS](https://obsproject.com/) - Open Broadcaster Software

>Settings -> Stream

Stream Type : Custom Streaming Server

URL : rtmp://localhost/live

Stream key : streamId (created stream id)

### Author

- **Filip Kusztelak**
