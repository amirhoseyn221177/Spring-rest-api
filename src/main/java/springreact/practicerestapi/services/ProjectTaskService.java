package springreact.practicerestapi.services;

import org.springframework.stereotype.Service;
import springreact.practicerestapi.Exceptions.ProjectNotFoundException;
import springreact.practicerestapi.domain.Backlog;
import springreact.practicerestapi.domain.Project;
import springreact.practicerestapi.domain.ProjectTask;
import springreact.practicerestapi.repositories.BacklogRepo;
import springreact.practicerestapi.repositories.ProjectTaskRepo;
import springreact.practicerestapi.repositories.Projectrepo;

import java.util.List;

@Service
public class ProjectTaskService {
    private BacklogRepo backlogRepo;
    private ProjectTaskRepo projectTaskRepo;
    private  Projectrepo projectrepo;


    public ProjectTaskService(BacklogRepo backlogRepo, ProjectTaskRepo projectTaskRepo, Projectrepo projectrepo) {
        this.backlogRepo = backlogRepo;
        this.projectTaskRepo = projectTaskRepo;
        this.projectrepo = projectrepo;
    }


    public ProjectTask addProjectTask(String projectIdentifier, ProjectTask projectTask){


        try{

            Backlog backlog=backlogRepo.findByProjectIdentifier(projectIdentifier);
            projectTask.setBacklog(backlog);
            Integer backSeq= backlog.getPTSequence();
            backSeq++;
            backlog.setPTSequence(backSeq);
            projectTask.setProjectSequence(projectIdentifier+"-"+backSeq);
            projectTask.setProjectIdentifer(projectIdentifier);
            if( projectTask.getPriority()==null){
                projectTask.setPriority(3);
            }
            if(projectTask.getStatus()==null|| projectTask.getStatus()==""){
                projectTask.setStatus("TO_DO");
            }
            return projectTaskRepo.save(projectTask);
        }catch (Exception e){
            throw new ProjectNotFoundException("Project not found ");
        }
    }

    public Iterable<ProjectTask> findByBackLogById(String backlog_id) {
        Project project= projectrepo.findByProjectIdentifier(backlog_id);
        if(project==null){
            throw new ProjectNotFoundException("Project with ID :" +backlog_id+ " doesnt exist");
        }
        return projectTaskRepo.findByProjectIdentiferOrderByPriority(backlog_id);
    }

    public ProjectTask findByprojectSequence(String backlog_id ,String seq){
        //Make sure we are searching on the right backlog
        Backlog backlog= backlogRepo.findByProjectIdentifier(backlog_id);
        if(backlog==null){
            throw new ProjectNotFoundException("Project does not exist ");
        }
        ProjectTask projectTask= projectTaskRepo.findByProjectSequence(seq);
        if(projectTask==null){
            throw new ProjectNotFoundException("This task does not exist");
        }
        if(!projectTask.getProjectIdentifer().equals(backlog_id)){
            throw new ProjectNotFoundException("Project Task does not exist in this project ");
        }

        return projectTaskRepo.findByProjectSequence(seq);
    }

    public ProjectTask updatingProjectTask(String backlog_id,ProjectTask updatedProject){
        System.out.println(updatedProject.getProjectSequence());
        ProjectTask projectTask= findByprojectSequence(backlog_id,updatedProject.getProjectSequence());
        projectTask=updatedProject;
        return projectTaskRepo.save(projectTask);
    }

    public void deletingTask(String backlog_id, String pt_id){
        ProjectTask projectTask= findByprojectSequence(backlog_id,pt_id);
        if(projectTask==null){
            throw new ProjectNotFoundException("This task does not exist");
        }

        projectTaskRepo.delete(projectTask);
    }
}
