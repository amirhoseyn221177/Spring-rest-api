package springreact.practicerestapi.services;


import org.springframework.stereotype.Service;
import springreact.practicerestapi.Exceptions.ProjectIdException;
import springreact.practicerestapi.domain.Backlog;
import springreact.practicerestapi.domain.Project;
import springreact.practicerestapi.repositories.BacklogRepo;
import springreact.practicerestapi.repositories.Projectrepo;

@Service
public class ProjectService {
    private final Projectrepo projectrepo;
    private final BacklogRepo backlogRepo;

    public ProjectService(Projectrepo projectrepo, BacklogRepo backlogRepo) {
        this.projectrepo = projectrepo;
        this.backlogRepo = backlogRepo;
    }

    public Project saveourproject(Project project){
        try {
            project.setProjectIdentifier(project.getProjectIdentifier().toUpperCase());
            if(project.getId()==null){
                Backlog backlog= new Backlog();
                project.setBacklog(backlog);
                backlog.setProject(project);
                backlog.setProjectIdentifier(project.getProjectIdentifier().toUpperCase());
            }
            if(project.getId()!=null){
                project.setBacklog(backlogRepo.findByProjectIdentifier(project.getProjectIdentifier().toUpperCase()));
            }
            return projectrepo.save(project);
        }catch (Exception e){
            throw new ProjectIdException("Project ID "+project.getProjectIdentifier().toUpperCase()+"already taken");
        }
    }

    public Project findProjectByIdentifier(String projectId){
        Project project= projectrepo.findByProjectIdentifier(projectId.toUpperCase());
        if(project==null){
            throw  new ProjectIdException("Project ID "+projectId+"does not exist");
        }
        return project;
    }

    public Iterable<Project> findAllProjects(){
        return  projectrepo.findAll();
    }

    public void deleteProjectByIdentifier(String projectId){
        Project project= projectrepo.findByProjectIdentifier(projectId.toUpperCase());

        if(project==null){
            throw new ProjectIdException("Cannot find a project with ID"+projectId);
        }
        projectrepo.delete(project);

    }





}
