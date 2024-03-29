import express from "express";
import routes from "../routes";
import { videoDetail, getEditVideo, postEditVideo, deleteVideo, getUpload, postUpload } from "../controllers/videoController";
import { uploadVideo } from "../localMiddlewares";

const videoRouter  = express.Router();

videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

videoRouter.get(routes.videoDetail(), videoDetail);

videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);

videoRouter.get(routes.deleteVideo(), deleteVideo);

export default videoRouter;