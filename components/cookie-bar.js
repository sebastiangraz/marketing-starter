import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FocusTrap from "focus-trap-react";
import Cookies from "js-cookie";

import { useHasMounted } from "../lib/helpers";

import CustomLink from "../components/link";
import { Button, Flex, Text } from "theme-ui";

const barAnim = {
  show: {
    opacity: 1,
    y: "0%",
    transition: {
      delay: 3,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  hide: {
    opacity: 0,
    y: "100%",
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const CookieBar = ({ data = {} }) => {
  const { enabled, message, link } = data;

  const hasMounted = useHasMounted();
  const { acceptedCookies, onAcceptCookies } = useAcceptCookies();
  const { rejectedCookies, onRejectCookies } = useRejectCookies();

  if (!enabled) return null;
  if (!hasMounted || !message) return null;

  return (
    <AnimatePresence>
      {!acceptedCookies && !rejectedCookies && (
        <FocusTrap focusTrapOptions={{ allowOutsideClick: true }}>
          <motion.div
            sx={{
              background: "text",
              position: "fixed",
              width: ["calc(100% - 2rem)", null, "auto"],
              maxWidth: "960px",
              color: "#fff",
              bottom: ["1rem", null, "2rem"],
              borderRadius: "default",
              right: ["1rem", null, "2rem"],
              zIndex: 100,
              p: [1, "1rem"],
            }}
            initial="hide"
            animate="show"
            exit="hide"
            variants={barAnim}
            role="dialog"
            aria-live="polite"
          >
            <Flex
              sx={{
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "2rem",
              }}
            >
              <Flex
                sx={{
                  alignItems: "center",
                  gap: ["0.25rem", "1rem"],
                  flexWrap: "wrap",
                }}
              >
                <Text
                  variant="label"
                  sx={{
                    maxWidth: 320,
                    mx: ["0.5rem", null, 0],
                    my: ["0.5rem", null, 0],
                  }}
                >
                  {message.split("\n").map((text, i) => {
                    // using React.fragment to parse line breaks
                    return (
                      <React.Fragment key={i}>
                        {text} {message.split("\n")[i + 1] && <br />}
                        {link && (
                          <CustomLink
                            link={{
                              ...{ page: link },
                              ...{ title: "Learn More" },
                            }}
                          />
                        )}
                      </React.Fragment>
                    );
                  })}
                </Text>
              </Flex>
              <Flex
                sx={{
                  gap: "1rem",
                  width: ["100%", "auto"],
                  justifyContent: ["space-between", "flex-start"],
                }}
              >
                <Button
                  sx={{ placeSelf: "flex-end" }}
                  variant="primary"
                  onClick={() => onRejectCookies()}
                >
                  Reject
                </Button>
                <Button
                  sx={{ placeSelf: "flex-end" }}
                  variant="secondary"
                  onClick={() => onAcceptCookies()}
                >
                  Accept
                </Button>
              </Flex>
            </Flex>
          </motion.div>
        </FocusTrap>
      )}
    </AnimatePresence>
  );
};

function useAcceptCookies(cookieName = "accept_cookies") {
  const [acceptedCookies, setAcceptedCookies] = useState(true);

  useEffect(() => {
    if (!Cookies.get(cookieName)) {
      setAcceptedCookies(false);
    }
  }, [cookieName]);

  const acceptCookies = () => {
    setAcceptedCookies(true);
    Cookies.set(cookieName, "accepted", { expires: 365 });
  };

  return {
    acceptedCookies,
    onAcceptCookies: acceptCookies,
  };
}

function useRejectCookies(cookieName = "reject_cookies") {
  const [rejectedCookies, setRejectedCookies] = useState(true);

  useEffect(() => {
    if (!Cookies.get(cookieName)) {
      setRejectedCookies(false);
    }
  }, [cookieName]);

  const rejectCookies = () => {
    setRejectedCookies(true);
    Cookies.set(cookieName, "rejected", { expires: 365 });
  };

  return {
    rejectedCookies,
    onRejectCookies: rejectCookies,
  };
}

export default React.memo(CookieBar);
