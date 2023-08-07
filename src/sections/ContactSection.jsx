import { useEffect, useState } from "react";
import raw from "../data/contact.csv";
import ContactCard from "../components/ContactCard";

export default function ContactSection() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch(raw)
      .then((r) => r.text())
      .then((text) => {
        var tempContact = [];
        var rawRecord = text.split("\n");

        for (var i = 0; i < rawRecord.length; i++) {
          var contactArray = rawRecord[i].split(",");
          tempContact.push({
            key: i,
            name: contactArray[0],
            link: contactArray[1],
          });
        }
        setContacts(tempContact);
      });
  }, []);

  return (
    <>
      <div className="container mt-12 mx-auto px-4 pt-24" id="contact">
        <h1 className="flex flex-row text-4xl font-bold text-center content-center justify-center">
          Contact
        </h1>
        <div className="py-8 mx-auto container ">
          <div className={`flex flex-wrap justify-center items-center gap-8`}>
            {contacts.map((contact) => {
              return (
                <div className="col-span-1" key={contact.key}>
                  <ContactCard name={contact.name} link={contact.link} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
