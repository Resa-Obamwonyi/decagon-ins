import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ProcessAccordion from './proccessAccordion';
import ProgramAccordion from './programAccordion';
import LoanAccordion from './loanAccordion';
import "./tabStyle.scss";

export default () => (
	<Tabs>
		<TabList>
			<Tab>
				<span className="fullText">About the </span>Process
			</Tab>
			<Tab>
				<span className="fullText">About the </span>Program
			</Tab>
			<Tab>
				<span className="fullText">About the </span>Loan
			</Tab>
		</TabList>

		<TabPanel>
			<ProcessAccordion />
		</TabPanel>
		<TabPanel>
			<ProgramAccordion />
		</TabPanel>
		<TabPanel>
			<LoanAccordion />
		</TabPanel>
	</Tabs>
);
