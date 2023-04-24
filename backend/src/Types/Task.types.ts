export interface taskInterface {
  name: string;
  priority: string;
  discription: string;
  from: string;
  to: string;
  image?: [];
  assignee?: [];
  reporter: string;
  projectId: string;
  comments?: [];
}
