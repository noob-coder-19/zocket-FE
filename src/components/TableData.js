import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import CampaignEntry from "./CampaignEntry";
import OnOffSlider from "./OnOffSlider";
import Platform from "./Platform";
import StatusButton from "./StatusButton";

const TableData = () => {
  const [campaigns, setCampaigns] = useState([]);

  const getCampaigns = async () => {
    axios
      .get("https://api-zocket-assignment.herokuapp.com/api/campaigns")
      .then((res) => {
        setCampaigns(res.data);
      });
  };

  useEffect(() => {
    getCampaigns();
  }, []);

  const getFormattedDate = (date) => {
    return moment(date, "DD/MM/YYYY").format("DD MMM YYYY");
  };

  const handleDelete = (id) => {
    // alert(id);
    axios
      .delete(`https://api-zocket-assignment.herokuapp.com/api/campaigns/${id}`)
      .then((res) => {
        getCampaigns();
      });
  };

  return (
    <TableContainer component={Paper} elevation={8} sx={{ my: 2 }}>
      <Table>
        <TableHead sx={{ backgroundColor: "rgba(248, 248, 248, 1)" }}>
          <TableRow>
            <TableCell>On/Off</TableCell>
            <TableCell>Campaign</TableCell>
            <TableCell>Date Range</TableCell>
            <TableCell>Clicks</TableCell>
            <TableCell>Budget</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Platform</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {campaigns.map((row) => (
            <TableRow key={row._id}>
              <TableCell>
                <OnOffSlider
                  disabled={false}
                  isOn={"Live now" === row.status}
                ></OnOffSlider>
              </TableCell>

              <TableCell>
                <CampaignEntry
                  img={row.imgLink}
                  title={row.name}
                  desc={row.desc}
                ></CampaignEntry>
              </TableCell>

              <TableCell>
                <Typography variant="caption">
                  {getFormattedDate(row.sdate)} - {getFormattedDate(row.edate)}
                </Typography>
              </TableCell>

              <TableCell>{row.clicks}</TableCell>

              <TableCell>{row.budget}</TableCell>

              <TableCell>{row.location}</TableCell>

              <TableCell>
                <Platform platform={row.platform}></Platform>
              </TableCell>

              <TableCell>
                <StatusButton text={row.status}></StatusButton>
              </TableCell>

              <TableCell>
                <img
                  src="https://i.ibb.co/nPRZ8c0/edit-2.png"
                  alt="Edit Button"
                  cursor="pointer"
                  style={{ marginRight: "1rem" }}
                />

                <img
                  src="https://i.ibb.co/v1ZsLmQ/trash.png"
                  alt="Delete Button"
                  cursor="pointer"
                  onClick={handleDelete.bind(this, row._id)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableData;
