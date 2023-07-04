import ReactGA4 from "react-ga4";

const GAEventsTracker = (category = "Event category") => {
  const trackEvent = (action = "action", label = "label") => {
    ReactGA4.event({
      category,
      action,
      label,
    });
  };
  return trackEvent;
};

export default GAEventsTracker;
