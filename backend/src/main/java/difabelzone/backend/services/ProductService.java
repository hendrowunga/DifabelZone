package difabelzone.backend.services;

import difabelzone.backend.payloads.ProductDTO;
import difabelzone.backend.payloads.ProductResponse;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface ProductService {


     ProductDTO addProduct(Long categoryId, ProductDTO productDTO);

     ProductResponse getAllProducts(Integer pageNumber, Integer pageSize, String sortBy, String sortOrder);

     ProductResponse searchProductByCategory(Long categoryId, Integer pageNumber, Integer pageSize, String sortBy, String sortOrder);

     ProductResponse searchProductByKeyword(String keyword, Integer pageNumber, Integer pageSize, String sortBy, String sortOrder);

     ProductDTO updateProduct(ProductDTO productDTO, Long productId);

     ProductDTO deleteProduct(Long productId);

     ProductDTO updateProductImage(Long productId, MultipartFile image) throws IOException;

}
