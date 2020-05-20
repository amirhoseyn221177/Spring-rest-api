package springreact.practicerestapi.web;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;
import springreact.practicerestapi.domain.Project;
import springreact.practicerestapi.services.MapvalidationError;
import springreact.practicerestapi.services.ProjectService;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/project")
public class ProjectController {
    private final ProjectService projectService;
    private final MapvalidationError mapvalidationError;

    public ProjectController(ProjectService projectService, MapvalidationError mapvalidationError) {
        this.projectService = projectService;
        this.mapvalidationError = mapvalidationError;
    }

    @PostMapping("")
    public ResponseEntity<?> createNewProject(@Valid @RequestBody Project project , BindingResult result){
        ResponseEntity<?> error= mapvalidationError.MapvalidationService(result);
        if(error!=null){
            return error;
        }
            Project project1= projectService.saveourproject(project);
        return  new ResponseEntity<Project>(project1, HttpStatus.CREATED);
    }



}
