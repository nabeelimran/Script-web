import MuiAccordion, {
  AccordionProps as AccordionBodyProps,
} from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

const FlexBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: 16,
}));

const StandardAccordionBody = styled((props) => {
  return <MuiAccordion disableGutters elevation={0} square {...props} />;
})(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  marginBottom: theme.spacing(2),
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const OutlinedAccordionBody = styled((props) => {
  return <MuiAccordion disableGutters elevation={0} square {...props} />;
})(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  marginBottom: theme.spacing(2),
  border: `2px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
  "&:before": {
    display: "none",
  },
}));

const ContainedAccordionBody = styled((props) => {
  return <MuiAccordion disableGutters elevation={0} square {...props} />;
})(({ theme }) => ({
  // backgroundColor: theme.palette.background.paper,
  marginBottom: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiAccordionSummary-content": {
    alignItems: "center",
  },
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
}));

const ContainedAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  borderRadius: theme.shape.borderRadius,
  margin: theme.spacing(1.5),
  marginTop: 0,
  padding: theme.spacing(2),
}));

const StandardAccordian = ({ expanded, onChange, title, children, icon }) => {
  return (
    <StandardAccordionBody expanded={expanded} onChange={onChange}>
      <AccordionSummary>
        {!!icon && <Box sx={{ mr: 1.5 }}>{icon}</Box>}
        <Typography variant="subtitle2">{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </StandardAccordionBody>
  );
};

const OutlinedAccordian = ({ expanded, onChange, title, children, icon }) => {
  return (
    <OutlinedAccordionBody expanded={expanded} onChange={onChange}>
      <AccordionSummary>
        {!!icon && <Box sx={{ mr: 1.5, display: "flex" }}>{icon}</Box>}
        <Typography variant="subtitle2">{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <FlexBox>{children}</FlexBox>
      </AccordionDetails>
    </OutlinedAccordionBody>
  );
};

const ContainedAccordian = ({ expanded, onChange, title, children, icon }) => {
  return (
    <ContainedAccordionBody expanded={expanded} onChange={onChange}>
      <AccordionSummary>
        {!!icon && <Box sx={{ mr: 1.5, display: "flex" }}>{icon}</Box>}
        <Typography variant="subtitle2">{title}</Typography>
      </AccordionSummary>
      <ContainedAccordionDetails>{children}</ContainedAccordionDetails>
    </ContainedAccordionBody>
  );
};

export { StandardAccordian, OutlinedAccordian, ContainedAccordian };
