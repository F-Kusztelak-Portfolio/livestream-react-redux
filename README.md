## Livestream App

This application allows user to create, delete, edit and live stream by using OBS or similar software.

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
### OBS installation

* [OBS](https://obsproject.com/) - Open Broadcaster Software

### OBS configuration

>Settings -> Stream

Stream Type : Custom Streaming Server

URL : rtmp://localhost/live

Stream key : streamId (created stream id)

### Author

- **Filip Kusztelak**
