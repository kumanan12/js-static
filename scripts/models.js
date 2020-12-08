

class BaseClass {
    constructor(id, createdBy){
        this.id = id;
        this.createdDate = new Date();
        this.ModifiedDate = new Date();
        this.createdBy = createdBy;
    }
}
class Conference extends BaseClass {
    constructor(id, name, description, topic, location,startDate, endDate, createdBy){
        super(id, createdBy);
        this.name= name;
        this.topic = topic;
        this.location = location;
        this.startDate = startDate;
        this.endDate = endDate;
    }
}

class Author extends BaseClass {
    constructor(id,firstName, lastName, affiliation, phone, email, createdBy){
        super(id, createdBy);
        this.firstName= firstName;
        this.lastName = lastName;
        this.affiliation = affiliation;
        this.phone = phone;
        this.email = email;
      
    }
}

class Reviewer extends BaseClass {
    constructor(id,firstName, lastName, affiliation, phone, email, createdBy){
        super(id, createdBy);
        this.firstName= firstName;
        this.lastName = lastName;
        this.affiliation = affiliation;
        this.phone = phone;
        this.email = email;
      
    }
}

class Editor extends BaseClass {
    constructor(id,firstName, lastName, affiliation, phone, email, createdBy){
        super(id, createdBy);
        this.firstName= firstName;
        this.lastName = lastName;
        this.affiliation = affiliation;
        this.phone = phone;
        this.email = email;
      
    }
}

class Paper extends BaseClass {
    constructor(id,title, abstract, keywords, status, originalPaper,fileName, createdBy, last_modified){
        super(id, createdBy);
        this.title= title;
        this.abstract = abstract;
        this.keywords = keywords;
        this.status = status;
        this.originalPaper = originalPaper;
        this.fileName = fileName;
        this.last_modified = last_modified;
        //file_name
      
    }
}

class Review extends BaseClass {
    constructor(id,submittedBy, paperId, paperTitle, feedback, keywords, status, originalPaper,fileName, createdBy, last_modified){
        super(id, createdBy);
        this.submittedBy= submittedBy;
        this.paperId = paperId;
        this.paperTitle = paperTitle;
        this.status = status;
        this.last_modified = last_modified;
    }
}


var c = new Conference(1,"Kumanan", "All things Cloud", "IOT", "Chennai", new Date("01/12/2021"), new Date("1/15/2021"));

