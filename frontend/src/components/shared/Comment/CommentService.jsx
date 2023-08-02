import PropTypes from 'prop-types';

const CommentService = ({ username, createdAt, text, fileName }) => {
  const fileDownload1 = async () => {
    const fileUrl = `http://localhost:8080/${fileName}`;

    //obtenemos el archivo con fetch
    const res = await fetch(fileUrl);
    const blob = await res.blob();

    //creamos un objeto URL para el blob
    const url = window.URL.createObjectURL(blob);

    //creamos un enlace temporal
    const link = document.createElement('a');
    link.href = url;

    // asignamos un nombre al enlace de descarga anterior
    link.download = fileName;

    //simulamos un click en el enlace para iniciar la descarga
    document.body.append(link);
    link.click();

    //eliminamos el enlace temporal
    link.remove();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div>
      <header>
        <p>@{username}</p>
        <time>
          {new Date(createdAt).toLocaleDateString('es-ES', {
            hour: '2-digit',
            minute: '2-digit',
            day: '2-digit',
            month: '2-digit',
            year: '2-digit',
          })}
        </time>
      </header>

      <p>{text}</p>
      {fileName && <a href={`http://localhost:8080/${fileName}`}></a>}
      <button onClick={fileDownload1}>descargar archivo</button>
    </div>
  );
};

CommentService.propTypes = {
  username: PropTypes.string,
  createdAt: PropTypes.string,
  text: PropTypes.string,
  fileName: PropTypes.string,
};

export default CommentService;
