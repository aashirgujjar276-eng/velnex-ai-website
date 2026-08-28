import React from "react";
import CallScene from "./scenes/CallScene.jsx";
import ChatScene from "./scenes/ChatScene.jsx";
import BookingScene from "./scenes/BookingScene.jsx";
import SyncScene from "./scenes/SyncScene.jsx";
import WorkflowScene from "./scenes/WorkflowScene.jsx";
import { DEFAULT_ANIMATION } from "../data/animations.js";

const SCENES = {
  call: CallScene,
  chat: ChatScene,
  booking: BookingScene,
  sync: SyncScene,
  workflow: WorkflowScene,
};

/**
 * Renders the animated scene for a page based on its mapped type
 * (see src/data/animations.js). Respects prefers-reduced-motion by
 * letting each scene keep its own transitions subtle; the whole block
 * can be hidden entirely for reduced-motion users via the `respectMotion` prop.
 */
export default function PageAnimation({ type, light = false }) {
  const Scene = SCENES[type] || SCENES[DEFAULT_ANIMATION];
  return <Scene light={light} />;
}
