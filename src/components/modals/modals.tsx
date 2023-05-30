import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { MODAL_COMPONENTS_STYLE } from "./modal-components.style";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

type ModalProps = {
  buttonText?: any;
  heading?: any;
  experience?: any;
  skills?: any;
  education?: any;
  hobbies?: any;
  language?: any;
};

export default function Modals({
  buttonText,
  heading,
  experience,
  skills,
  education,
  hobbies,
  language,
}: ModalProps) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>{buttonText}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={MODAL_COMPONENTS_STYLE.modals_Container}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {heading}
          </Typography>
          <Box sx={{ maxHeight: "70vh", overflowY: "auto" }}>
            {heading === "Experience" ? (
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>ID</TableCell>
                      <TableCell>Company Name</TableCell>
                      <TableCell>Work Duration</TableCell>
                      <TableCell>Company Role</TableCell>
                      <TableCell>Company Project Name</TableCell>
                      <TableCell>Main Technologies is used</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {experience.map((item: any) => (
                      <TableRow key={item.id}>
                        <TableCell>{item.id}</TableCell>
                        <TableCell>{item.company}</TableCell>
                        <TableCell>{item.duration}</TableCell>
                        <TableCell>{item.role}</TableCell>
                        <TableCell>
                          {item.project_name.map((project: any) => (
                            <span>
                              {project.split(".").join(".\n")}
                              <br />
                            </span>
                          ))}
                        </TableCell>
                        <TableCell>{item.technologies.join(", ")}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            ) : null}
            {heading === "Skills" ? (
              <ul>
                {skills.map((d: any) => (
                  <>
                    <li>
                      {" "}
                      <span style={MODAL_COMPONENTS_STYLE.heading_test}>
                        Programming language
                      </span>
                      :- {d.languages.join(", ")}
                    </li>
                    <li>
                      {" "}
                      <span style={MODAL_COMPONENTS_STYLE.heading_test}>
                        Extra Skills
                      </span>
                      :- {d.extraSkills.join(", ")}
                    </li>
                  </>
                ))}
              </ul>
            ) : null}
            {heading === "Education" ? (
              <ul>
                {education.map((d: any) => (
                  <>
                    <li>
                      {" "}
                      <span style={MODAL_COMPONENTS_STYLE.heading_test}>
                        College
                      </span>
                      :- {d.college}
                    </li>
                    <li>
                      {" "}
                      <span style={MODAL_COMPONENTS_STYLE.heading_test}>
                        School
                      </span>
                      :- {d.school.join(", ")}
                    </li>
                    <li>
                      {" "}
                      <span style={MODAL_COMPONENTS_STYLE.heading_test}>
                        Extra Course
                      </span>
                      :- {d.extra_course.join(", ")}
                    </li>
                  </>
                ))}
              </ul>
            ) : null}
            {heading === "Hobbies" ? (
              <ul>
                {hobbies.map((d: any) => (
                  <>
                    <li>
                      {" "}
                      <span style={MODAL_COMPONENTS_STYLE.heading_test}>
                        Hobbies
                      </span>
                      :- {d.hobbies.join(", ")}
                    </li>
                  </>
                ))}
              </ul>
            ) : null}
            {heading === "Languages" ? (
              <ul>
                {language.map((d: any) => (
                  <>
                    <li>
                      {" "}
                      <span style={MODAL_COMPONENTS_STYLE.heading_test}>
                        Talking Language
                      </span>
                      :- {d.languages.join(", ")}
                    </li>
                  </>
                ))}
              </ul>
            ) : null}
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
