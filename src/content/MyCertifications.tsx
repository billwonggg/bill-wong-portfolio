import awsCloudPractitioner from "../assets/images/certifications/aws_cloud_practitioner.png";
import awsDeveloperAssociate from "../assets/images/certifications/aws_developer_associate.png";
import awsSAAssociate from "../assets/images/certifications/aws_sol_arch_associate.png";
import azureFundamentals from "../assets/images/certifications/azure_fundamentals.png";
import gcp from "../assets/images/certifications/gcp.png";
import msExcelExpert from "../assets/images/certifications/ms_excel_expert.png";
import Certification from "../models/Certification";

const MyCertifications: Certification[] = [
  {
    name: "AWS Certified Solutions Architect - Associate",
    url: "https://www.credly.com/badges/6876050d-161a-4064-955b-fa8f6da829c3",
    image: <img src={awsSAAssociate} alt="AWS Certified Solutions Architect - Associate" />,
  },
  {
    name: "AWS Certified Developer - Associate",
    url: "https://www.credly.com/badges/d7719957-5864-447f-b9ce-aed472c58b1b",
    image: <img src={awsDeveloperAssociate} alt="AWS Certified Developer - Associate" />,
  },
  {
    name: "AWS Certified Cloud Practitioner",
    url: "https://www.credly.com/badges/1be821a4-78c1-44f2-9542-4deeea4225e3",
    image: <img src={awsCloudPractitioner} alt="AWS Certified Cloud Practitioner" />,
  },
  {
    name: "Microsoft Certified: Azure Fundamentals",
    url: "https://www.credly.com/badges/716a3c46-cd1b-4788-bb53-e15c3a0a8605",
    image: <img src={azureFundamentals} alt="Microsoft Certified: Azure Fundamentals" />,
  },
  {
    name: "Google Cloud Certification",
    url: "https://www.cloudskillsboost.google/public_profiles/3619bacc-273e-4485-82e6-9e190832607a",
    image: <img src={gcp} alt="Google Cloud Certification" />,
  },
  {
    name: "Microsoft Excel Expert",
    url: "https://www.credly.com/badges/aeb27d10-5b44-479b-a3dd-a9a0a92bebcd",
    image: <img src={msExcelExpert} alt="Microsoft Excel Expert" />,
  },
];

export default MyCertifications;
