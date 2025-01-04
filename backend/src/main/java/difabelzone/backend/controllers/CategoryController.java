package difabelzone.backend.controllers;

import difabelzone.backend.models.Category;
import difabelzone.backend.services.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }


    @GetMapping("/public/categories")
    public List<Category> getAllCategories(){
        return categoryService.getAllCategories();
    }
    @PostMapping("/public/categories")
    public String createCategory(@RequestBody Category category){
        categoryService.createCategories(category);
        return "Category added successfully";
    }

    @DeleteMapping("/admin/categories/{categoryId}")
    public String deleteCategory(@PathVariable Long categoryId){
        String status=categoryService.deleteCategory(categoryId);
        return status;
    }
}
