package springreact.practicerestapi.web;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;
import springreact.practicerestapi.Exceptions.ProjectIdException;
import springreact.practicerestapi.domain.Project;
import springreact.practicerestapi.services.MapvalidationError;
import springreact.practicerestapi.services.ProjectService;

import javax.validation.Valid;
import java.security.Principal;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/project")
@CrossOrigin(origins = "http://localhost:3000")
public class ProjectController {
    private final ProjectService projectService;
    private final MapvalidationError mapvalidationError;

    public ProjectController(ProjectService projectService, MapvalidationError mapvalidationError) {
        this.projectService = projectService;
        this.mapvalidationError = mapvalidationError;

    }

    @PostMapping("")
    public ResponseEntity<?> createNewProject(@Valid @RequestBody Project project , BindingResult result, Principal principal){
        System.out.println(project);
        ResponseEntity<?> error= mapvalidationError.MapvalidationService(result);
        if(error!=null){
            return error;
        }

        Project project1= projectService.saveourproject(project);
        return  new ResponseEntity<Project>(project1, HttpStatus.CREATED);
    }

    @GetMapping("/{projectId}")
    public ResponseEntity<?> getProjectId(@PathVariable String projectId){
        Project project=projectService.findProjectByIdentifier(projectId);
        return  new ResponseEntity<>(project,HttpStatus.OK);
    }

    @GetMapping("/all")
    public Iterable<Project> allProjects(){
        return  projectService.findAllProjects();
    }


    @DeleteMapping("/{projectId}")
    public ResponseEntity<?> delteProjectById(@PathVariable String projectId){
        projectService.deleteProjectByIdentifier(projectId);
        Iterable<Project> projects=projectService.findAllProjects();
        Map<String,Iterable<Project>> all = new HashMap<>();
        all.put("Project with ID"+projectId+"has been deleted ",projects);
        return  new ResponseEntity<>(all, HttpStatus.OK);
    }

}
