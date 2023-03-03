import { getPreferenceValues } from "@raycast/api";
import ResultView from "./common";

const prompt = getPreferenceValues().prompt_rewrite;
const toast_title = "Rewriting...";

export default function Summarize() {
  return ResultView(prompt, toast_title);
}
