import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FocusTrap from "focus-trap-react";
import Cookies from "js-cookie";

import { useHasMounted } from "../lib/helpers";

import CustomLink from "../components/link";
import { Button, Flex, Link, Text } from "theme-ui";

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

  if (!enabled) return null;

  if (!hasMounted || !message) return null;

  return (
    <AnimatePresence>
      {!acceptedCookies && (
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
              p: ".5rem .5rem .5rem 2rem",
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
                <Text sx={{ m: 0, mt: "1rem", mb: "1rem" }}>
                  {message.split("\n").map((text, i) => {
                    // using React.fragment to parse line breaks
                    return (
                      <React.Fragment key={i}>
                        {text} {message.split("\n")[i + 1] && <br />}
                      </React.Fragment>
                    );
                  })}
                </Text>
                {link && (
                  <CustomLink
                    link={{ ...{ page: link }, ...{ title: "Learn More" } }}
                  />
                )}
              </Flex>

              <Button
                sx={{ placeSelf: "flex-end" }}
                variant="secondary"
                onClick={() => onAcceptCookies()}
              >
                Accept
              </Button>
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

export default React.memo(CookieBar);
