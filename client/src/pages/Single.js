import React from "react";
import { BsPencilFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import image from "../profile.jpeg";
import { Link } from "react-router-dom";
import { Menu } from "../Components/Menu";


const Single = () => {
  return (
    <div className="flex justify-evenly py-[5%]">
      <div className="flex-col space-y-4">
        <div>
          <img
            src="https://media.gcflearnfree.org/content/55e0730c7dd48174331f5164_01_17_2014/whatisacomputer_pc.jpg"
            className="w-[100vh]"
          />
        </div>
        <div className="flex items-center space-x-2">
          <div>
            <img src={image} className="w-12" />
          </div>
          <div className="flex-col">
            <span className="font-bold text-lg">John</span>
            <p className="text-sm font-serif">Posted 2 days ago</p>
          </div>
          <div className="flex space-x-2">
            <Link to={`/write?edit=2`} className="bg-green-600 rounded-full px-2 py-2">
              <BsPencilFill size={15} fill="white"/>
            </Link>
            <Link className="bg-red-600 rounded-full px-2 py-2">
            <MdDelete size={15} fill="white" />
            </Link>
          </div>
        </div>
        <div className="w-[100vh]">
          <h2 className="font-bold text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </h2>
          <p className="font-sans justify-center">
            In 2018, the World Bank came up with its Country Partnership
            Framework (CPF) covering the five-year period of FY2019-2023.
            Coincidentally, this came at a time of historic transformation in
            Nepal, as a new government took up office in February 2018. The
            signing of the Comprehensive Peace Agreement in 2006 ended a 10-year
            conflict that came at a significant cost of lives and foregone
            economic development. Since then, Nepal has gone through lengthy and
            complex transitions towards a new Constitution in 2015 that set in
            place a federal structure.
            <br />
            <br /> By the end of 2017, elections were successfully held at the
            federal, state, and local tiers. There is a newfound optimism for
            greater political stability, inclusion, good governance and
            sustainable growth. The new federal structure presents unprecedented
            opportunities for Nepal to reset its development storyline, as
            outlined in the Systematic Country Diagnostic (SCD).At the same
            time, the shift to federalism poses new challenges and source of
            fragility, given the heightened popular aspirations and
            expectations. Key challenges include the need to clarify the
            functions and accountabilities of the federal, state, and local
            governments; deliver basic services and maintain infrastructure
            development; create a conducive environment for the private sector;
            and address governance weaknesses that may worsen in the early years
            of the new federal system.
            <br />
            <br /> COUNTRY CONTEXT In Nepal, the government formed in 2018 was
            preceded by elections for all three tiers (local, state and federal)
            of the state architecture defined by the new constitution, marking a
            protracted but successful conclusion of a political transition that
            began with the signing of the Comprehensive Peace Agreement in
            November 2006. State governments largely mirror the coalition at the
            center. At the sub-national level, funds, functions and
            functionaries hitherto managed by the central, district and village
            authorities are moving to the seven new states and 753 local
            governments for which new legislation, institutions and
            administrative procedures are being formalized as constitutionally
            prescribed. Meanwhile, the central level authority is being
            streamlined with a focus on oversight. <br />
            <br />
            These exercises at state restructuring are expected to result in
            improved outreach and service delivery but will likely take time
            before they become fully operational. Significant adjustments need
            to be made to the government structure. They include amending over
            400 existing acts, restructuring the civil service at all levels,
            devolving fiscal management, and determining the division of funds,
            functions, and functionaries between various levels of government.
            State restructuring on this scale is uncharted territory for Nepal
            and smoothening the transition from the previous unitary system to
            the new federal one will remain a daunting task. <br />
            <br />
            The new system, in principle, provides opportunities to decentralize
            development benefits and make service delivery more effective and
            accountable. However, the risks of jurisdictional overlap between
            the three tiers of government, lack of clarity and coherence between
            policies and devolved powers, and duplication of efforts will remain
            high during the coming few years. Key aspects of the new system
            require further definition and may continue to be contested by
            different population groups. RECENT ECONOMIC DEVELOPMENTS Real GDP
            growth decreased to an estimated 1.9 percent in FY23, the lowest
            rate since FY20 and substantially below the 10-year average growth
            rate. Monetary tightening and the effects of import restrictions
            contribhrank. Hydroelectric generation increased significantly for
            the secouted to the slowdown. Economic activity was particularly
            subdued in the industry and services sectors, while agricultural
            output remained more resilient.
          </p>
        </div>
      </div>
      <div><Menu/></div>
    </div>
  );
};

export default Single;
