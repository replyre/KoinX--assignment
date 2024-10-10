import { faqsData } from "../database/faqsData";
import { Table } from "antd";

const columns = [
  {
    title: "Income",
    dataIndex: "income",
    key: "income",
    align: "center",
    width: "50%",
  },
  {
    title: "Tax Rate",
    dataIndex: "taxRate",
    key: "taxRate",
    align: "center",
    width: "50%",
  },
];

const data = [
  {
    key: "1",
    income: "$0 - $18,200",
    taxRate: "0%",
  },
  {
    key: "2",
    income: "$18,201 - $45,000",
    taxRate: "Nil + 19% of the excess over $18,200",
  },
  {
    key: "3",
    income: "$45,001 - $120,000",
    taxRate: "$5,092 + 32.5% of the excess over $45,000",
  },
  {
    key: "4",
    income: "$120,001 - $180,000",
    taxRate: "$29,467 + 37% of the excess over $120,000",
  },
  {
    key: "5",
    income: "$180,001+",
    taxRate: "$51,667 + 45% of the excess over $180,000",
  },
];

const FAQs = () => {
  function isArrayOrNormal(value) {
    if (Array.isArray(value)) {
      return value.map((item) => (
        <span>
          {isArrayOrNormal(item)}
          <br />
        </span>
      ));
    }
    return value;
  }

  return (
    <div className="faqs">
      <h2>Frequently Asked Questions</h2>
      <ol>
        {faqsData.map(({ id, question, answer }) => (
          <li key={id}>
            <p className="question">{question}</p>
            {Array.isArray(answer) ? (
              <div>{isArrayOrNormal(answer)}</div>
            ) : (
              <p>{answer}</p>
            )}
            {(id === 1 || id === 2 || id === 10) && (
              <div className="seperation" />
            )}
          </li>
        ))}
        <li>
          <p className="question">
            How do I calculate my crypto tax in Australia?
          </p>
          <p>
            To calculate your crypto tax in Australia accurately, you need to
            consider both income tax and capital gains tax.
            <div style={{ fontWeight: "bold", margin: "10px 0px" }}>
              Income Tax
            </div>
            In Australia, when an individual (investor) sells, trades, spends,
            earns (salary, mining, interest) or gifts cryptocurrency, the net
            capital gain is taxed at the same rate as their Income Tax. This tax
            rate is determined based on their total income for the tax year.
          </p>
          <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            bordered
            style={{ margin: "20px auto", width: "80%" }}
          />
          <h3 style={{ fontWeight: "bold", margin: "0px" }}>
            Capital Gains Tax (CGT)
          </h3>
          <span>
            Calculate your capital gains or losses on cryptocurrency
            transactions using this formula:
          </span>
          <div style={{ fontWeight: "bold", margin: "10px 0px" }}>
             Capital Gain/Loss = Capital Proceeds - Cost Basis 
          </div>
          <div>
            <h4>
              Note:
              <br />
              Capital Proceeds (sale value or any form of receipt) <br />
              Cost Basis (costs incurred to acquire, hold, and dispose of the
              asset)
            </h4>{" "}
            Your tax rate depends on whether you held the cryptocurrency for
            more than 12 months (long-term) or less (short-term). Long-term
            gains receive a 50% discount.
            <br />
            <br /> Calculate your Australian crypto taxes accurately and
            effortlessly with KoinX's free crypto tax calculator for Australia.
            It simplifies the process, ensuring compliance with the latest tax
            rates and regulations making crypto tax calculations easy and
            precise.
          </div>
        </li>
      </ol>{" "}
    </div>
  );
};

export default FAQs;
