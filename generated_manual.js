'use strict';
// auto-generated code from python

function getGeneratedData()
{
    var pub_rv = getGeneratedPublications();
    var publications = pub_rv[0];
    var gs_citations = pub_rv[1];
    var gs_hindex = pub_rv[2];
    var gs_date = pub_rv[3];
      
    var committees = [
    {
        year: 2024,
        acronym: "ICCPS",
        text: "15th ACM/IEEE International Conference on Cyber-Physical Systems"
    },
    {
        year: 2024,
        acronym: "HSCC",
        text: "27th ACM International Conference on Hybrid Systems: Computation and Control"
    },
    {
        year: 2023,
        acronym: "HSCC",
        text: "24th ACM International Conference on Hybrid Systems: Computation and Control"
    },
    {
        year: 2023,
        acronym: "NFM",
        text: "15th NASA Formal Methods Symposium"
    },
    {
        year: 2023,
        acronym: "ARCH",
        text: "10th International Workshop on Applied Verification of Continuous and Hybrid Systems"
    },
    {
        year: 2022,
        acronym: "EMSOFT",
        text: "22nd ACM SIGBED International Conference on Embedded Software"
    },
    {
        year: 2022,
        acronym: "NFM",
        text: "14th NASA Formal Methods Symposium"
    },
    {
        year: 2022,
        acronym: "ICCPS-AE",
        text: "13th ACM/IEEE International Conference on Cyber-Physical Systems, Artifact Evaluation Chair"
    },
    {
        year: 2022,
        acronym: "HSCC-RE",
        text: "25th ACM International Conference on Hybrid Systems: Computation and Control, Repeatability Evaluation Chair"
    },
    {
        year: 2022,
        acronym: "HSCC",
        text: "25th ACM International Conference on Hybrid Systems: Computation and Control"
    },
    {
        year: 2022,
        acronym: "ARCH",
        text: "9th International Workshop on Applied Verification of Continuous and Hybrid Systems"
    },
    {
        year: 2021,
        acronym: "EMSOFT",
        text: "21st ACM SIGBED International Conference on Embedded Software"
    },
    {
        year: 2021,
        acronym: "ICCPS",
        text: "12th ACM/IEEE International Conference on Cyber-Physical Systems"
    },
    {
        year: 2021,
        acronym: "HSCC-RE",
        text: "24th ACM International Conference on Hybrid Systems: Computation and Control, Repeatability Evaluation Chair"
    },
    {
        year: 2021,
        acronym: "HSCC",
        text: "24th ACM International Conference on Hybrid Systems: Computation and Control"
    },
    {
        year: 2021,
        acronym: "ARCH",
        text: "8th International Workshop on Applied Verification of Continuous and Hybrid Systems"
    },
    {
        year: 2020,
        acronym: "EMSOFT",
        text: "20th ACM SIGBED International Conference on Embedded Software"
    },
    {
        year: 2020,
        acronym: "ARCH",
        text: "7th International Workshop on Applied Verification of Continuous and Hybrid Systems"
    },
    {
        year: 2020,
        acronym: "NSV",
        text: "13th International Workshop on Numerical Software Verification"
    },
    {
        year: 2020,
        acronym: "ICCPS",
        text: "11th ACM/IEEE International Conference on Cyber-Physical Systems"
    },
    {
        year: 2019,
        acronym: "HSCC",
        text: "22nd ACM International Conference on Hybrid Systems: Computation and Control"
    },
    {
        year: 2019,
        acronym: "CyPhy",
        text: "9th Workshop on Design, Modeling and Evaluation of Cyber Physical Systems"
    },
    {
        year: 2019,
        acronym: "DARS",
        text: "4th Workshop on Design and Analysis of Robust Systems"
    },
    {
        year: 2019,
        acronym: "EMSOFT",
        text: "19th ACM SIGBED International Conference on Embedded Software"
    },
    {
        year: 2019,
        acronym: "ARCH",
        text: "6th International Workshop on Applied Verification of Continuous and Hybrid Systems"
    },
    {
        year: 2019,
        acronym: "ICCPS",
        text: "10th ACM/IEEE International Conference on Cyber-Physical Systems"
    },
    {
        year: 2018,
        acronym: "CyPhy",
        text: "8th Workshop on Design, Modeling and Evaluation of Cyber Physical Systems"
    },
    {
        year: 2018,
        acronym: "ARCH",
        text: "5th International Workshop on Applied veRification for Continuous and Hybrid Systems"
    },
    {
        year: 2018,
        acronym: "HSCC",
        text: "21st ACM International Conference on Hybrid Systems: Computation and Control"
    },
    {
        year: 2018,
        acronym: "ICCPS",
        text: "9th ACM/IEEE International Conference on Cyber-Physical Systems"
    },
    {
        year: 2018,
        acronym: "DARS",
        text: "3rd Workshop on Design and Analysis of Robust Systems"
    },
    {
        year: 2018,
        acronym: "SNR",
        text: "4th International Workshop on Symbolic and Numerical Methods for Reachability Analysis"
    },
    {
        year: 2018,
        acronym: "RTEST WiP",
        text: "CSI International Symposium on Real-Time and Embedded Systems and Technologies, Work-in-Progress Session"
    },
    {
        year: 2017,
        acronym: "RTSS-AE",
        text: "38th IEEE Real-Time Systems Symposium, Artifact Evaluation Chair"
    },
    {
        year: 2017,
        acronym: "S5",
        text: "8th Annual Safe and Secure Systems and Software Symposium"
    },
    {
        year: 2017,
        acronym: "NSV",
        text: "10th International Workshop on Numerical Software Verification"
    },
    {
        year: 2017,
        acronym: "SNR",
        text: "3rd International Workshop on Symbolic and Numerical Methods for Reachability Analysis"
    },
    {
        year: 2017,
        acronym: "HSCC-RE",
        text: "20th ACM International Conference on Hybrid Systems: Computation and Control, Repeatability Evaluation"
    },
    {
        year: 2017,
        acronym: "ARCH",
        text: "4th International Workshop on Applied veRification for Continuous and Hybrid Systems"
    },
    {
        year: 2017,
        acronym: "IET CPS",
        text: "IET Cyber-Physical Systems: Theory and Applications, Guest Editor",
        links: [["CFP", "perm/IET_2017_CPS.pdf"]]
    },
    {
        year: 2016,
        acronym: "CDCAS",
        text: "AAAI 2016 Fall Symposium: Cross-Disciplinary Challenges for Autonomous Systems"
    },
    {
        year: 2016,
        acronym: "NSV",
        text: "9th International Workshop on Numerical Software Verification"
    },
    {
        year: 2016,
        acronym: "S5",
        text: "7th Annual Safe and Secure Systems and Software Symposium"
    },
    {
        year: 2016,
        acronym: "ARCH",
        text: "3rd International Workshop on Applied veRification for Continuous and Hybrid Systems"
    },
    {
        year: 2016,
        acronym: "RTAS",
        text: "22nd IEEE Real-Time Embedded Technology and Applictions Symposium, Embedded Systems Design for Real-Time Applications Track"
    },
    {
        year: 2016,
        acronym: "ICCPS-WiP",
        text: "7th ACM/IEEE International Conference on Cyber-Physical Systems, Work-in-Progress/Demo/Poster Session"
    },
    {
        year: 2015,
        acronym: "RTSS",
        text: "36th IEEE Real-Time Systems Symposium, Cyber-Physical Systems Track"
    },
    {
        year: 2015,
        acronym: "RTSS-WiP",
        text: "36th IEEE Real-Time Systems Symposium, Work-in-Progress Session"
    },
    {
        year: 2015,
        acronym: "S5",
        text: "6th Annual Safe and Secure Systems and Software Symposium"
    },
    {
        year: 2015,
        acronym: "ARCH",
        text: "2nd International Workshop on Applied veRification for Continuous and Hybrid Systems"
    },
    {
        year: 2014,
        acronym: "CyPhy",
        text: "4th Workshop on Design, Modeling and Evaluation of Cyber Physical Systems"
    },
    ];
      
    var grants = [
    {
        year: 2019,
        text: "\"Enhanced Testing of Autonomous Systems using Formal Methods\", AFOSR Grant under BAA-AFOSR-2019 Agile Science of Test and Evaluation (Co-PI), $540K"
    },
    {
        year: 2019,
        text: "\"Verification and Validation of Autonomy\", subcontract to Infoscitex Corporation under prime contract FA865015D2516 (PI), $136K"
    },
    {
        year: 2018,
        text: "\"Verification and Validation / Hybrid Systems Reachability\", subcontract to Wright Brothers Institute under prime contract FA86501237255. (PI), $106K"
    },
    {
        year: 2016,
        text: "\"Agile Approaches for Correct Design of Cyber-Physical Systems\", AFOSR LRIR Award under BAA-AFOSR-2016 Systems and Software (Co-PI), $739K"
    },
    {
        year: 2013,
        text: "\"Perpetual Model Validation\", AFOSR LRIR Award under BAA-AFOSR-2013 Systems and Software (Co-PI), $739K"
    },
    {
        year: 2009,
        text: "Science, Mathematics and Research for Transformation (SMART) Scholarship, $335K"
    },
    {
        year: 2008,
        text: "Debra and Ira Cohen Graduate Fellowship, Stipend ($22K) + Tuition Waiver ($38K) = $60K"
    },
    {
        year: 2007,
        text: "Debra and Ira Cohen Graduate Fellowship, Stipend ($21K) + Tuition Waiver ($37K) = $58K"
    },
    ];

	var awards = [
    {
        year: 2026,
        text: "Best Newcomer Tool Award at the Verification of Neural Networks Competition (VNN-COMP 2026) (vibecheck tool)",
        links: [["blog", "vibecheck/"]]
	},
    {
        year: 2026,
        text: "Outstanding Infrastructure & Evaluation Award at the Verification of Neural Networks Competition (VNN-COMP 2026)",
        links: [["slide", "perm/vnncomp2026_infrastructure_award.png"]]
	},
    {
        year: 2026,
        text: "Best Poster Award at ACNS",
        links: [["certificate", "perm/acns2026_best_poster.jpg"]]
	},
    {
        year: 2024,
        text: "$20K Stony Brook Trustees Faculty Award",
        links: [["link", "https://archivednews.cs.stonybrook.edu/about-us/News/stanley-bak-wins-trustees-award"]]
	},
    {
        year: 2024,
        text: "$200 Best Artifact Evaluation Award at ICCPS",
        links: [["certificate", "perm/iccps2024repeatability.jpg"]]
	},
    {
        year: 2023,
        text: "Verification of Neural Networks Competition (VNN-COMP 2023) Category winner for acasxu, collins-rul-cnn categories (nnenum tool)",
        links: [["certificate", "perm/vnncomp2023_certificate_nnenum.pdf"]]
	},
    {
        year: 2023,
        text: "€1000 Common Road Motion Planning Competition (2nd place)",
        links: [["certificate", "perm/commonroad2023.jpg"]]
	},
    {
        year: 2022,
        text: "Solo Race Category Winner, 2nd Generalized Racing Intelligent Competition (GRAIC), CPS-IoT Week 2022",
        links: [["certificate", "perm/graic2022.jpg"]]
	},
    {
        year: 2022,
        text: "Research Excellence Award from Stony Brook CS Department",
        links: [["certificate", "perm/research_excellence_2022.jpg"]]
	},
    {
        year: 2017,
        text: "€500 Best Paper Award at ARCH Workshop",
        links: [["picture", "perm/arch2017_award.jpg"], ["certificate", "perm/arch2017_cert.jpg"]]
	},
    {
        year: 2016,
        text: "$2000 Aerospace Systems Directorate International Award",
        links: [["picture", "perm/rq2016_international.jpg"]]
	},
    {
        year: 2016,
        text: "$400 Best Repeatability Evaluation Package Award at HSCC",
        links: [["picture", "perm/hscc2016picture.jpg"], ["certificate", "perm/hscc2016certificate.jpg"]]
	},
    {
        year: 2016,
        text: "€500 Best Tool Award at ARCH Workshop",
        links: [["picture", "perm/arch2016_award.jpg"], ["link", "http://cps-vo.org/node/26118"]]
	},
    {
        year: 2013,
        text: "Nexus 10 Tablet Winner in Coyote Logistics Hackathon (1st Place)",
        links: [["picture", "perm/nexus10.jpg"]]
	},
    {
        year: 2013,
        text: "$100 Amazon Gift Card Winner in UIUC indeed.com Programming Competition"
	},
    {
        year: 2011,
        text: "$50 Amazon Gift Card Winner in UIUC indeed.com Programming Competition"
	},
    {
        year: 2010,
        text: "iPod Touch Winner in UIUC ICPC Programming Competition (1st Place)"
	},
    {
        year: 2007,
        text: "Connect-4 Artificial Intelligence Class Champion (1st Place, Also Beat Multiyear Champion)",
        links: [["code segment", "perm/ai_shirt_front.jpg"], ["winning game", "perm/ai_shirt_back.jpg"]]
    },
    {
        year: 2004,
        text: "Founders Award of Excellence for Undergraduate Research",
        links: [["link", "http://www.rpi.edu/news/foundersaward/"]]
	},
	{
        year: 2004,
        text: "Winner in RPI Programming Contest (1st Place)"
	}
	];
    
    var rv = [gs_citations, gs_hindex, gs_date, publications, committees, grants, awards];
    
    return rv;
}
