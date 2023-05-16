import { Typography, Card, CardHeader, Avatar, Button } from "@mui/material";
import { Notification } from "../../types/types";
import { getTodayDate } from "../../utils/formatDate";
import { CardStyle, CardSubheader } from "./constant";
import useNotifications from "../../utils/useNotifications";
import { Link } from "react-router-dom";

type AskForFeedbackCardProps = {
  noti: Notification;
};

const AskForFeedbackCard = ({ noti }: AskForFeedbackCardProps) => {
  let today = getTodayDate();

  const { adminNoti } = useNotifications();

  return (
    <Card sx={CardStyle(noti.date === today)}>
      <CardHeader
        avatar={
          <Avatar
            sx={{
              backgroundColor: "#fcb900",
            }}
          >
            {noti.sender[0].senderName.slice(0, 1)}
          </Avatar>
        }
        title={
          <Typography>
            {adminNoti ? (
              <b>
                <span style={{ color: "#9b51e0" }}>
                  {noti.sender[0].senderName}{" "}
                </span>
                is asking for feedback from {noti.receiver.length} employees.{" "}
              </b>
            ) : (
              <>
                <b>
                  <span style={{ color: "#9b51e0" }}>
                    {noti.sender[0].senderName}
                  </span>{" "}
                  is asking for your feedback.{" "}
                </b>
              </>
            )}
          </Typography>
        }
        subheader={CardSubheader(noti.date)}
        action={
          <Link to={`/requests/${noti.requestid}`}>
            <Button variant="contained">View request</Button>
          </Link>
        }
      ></CardHeader>
    </Card>
  );
};

export default AskForFeedbackCard;
